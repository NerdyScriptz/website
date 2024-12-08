/**
 * dehar.mjs
 * Extracts URLs from HAR files and downloads assets using wget.
 * 
 * USAGE:
 * node dehar.mjs name.har /folder
 * 
 * Copyright (c) 2024 Jaxon Whitehouse/ Nerdyscriptz.
 * Licensed under the MIT License.
 */

import fs from 'fs/promises';
import { exec } from 'child_process';
import { unlink } from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

const harFilePath = process.argv[2];
const outputDir = process.argv[3];

const bannedExtensions = [".php", ".asp"];

if (!harFilePath || !outputDir) {
    console.error('Usage: node dehar.mjs <path_to_har_file> <output_directory>');
    process.exit(1);
}

async function main() {
    try {
        console.log(`Reading HAR file: ${harFilePath}`);
        const data = await fs.readFile(harFilePath, 'utf8');

        console.log('Parsing HAR file...');
        const har = JSON.parse(data);

        console.log('Extracting URLs...');
        const urls = new Set();
        for (const entry of har.log.entries) {
            const url = entry.request.url.split('?')[0];
            if (!bannedExtensions.some(ext => url.endsWith(ext))) {
                urls.add(url);
            }
        }

        if (urls.size === 0) {
            console.warn('No valid URLs found in the HAR file.');
            return;
        }

        console.log(`Extracted ${urls.size} URLs. Preparing temporary file...`);
        const tempFile = './wgettemp.txt';
        await fs.writeFile(tempFile, Array.from(urls).join('\n'), 'utf8');

        const command = `wget -x -i ${tempFile} -P ${outputDir}`;
        console.log('Running command:', command);

        try {
            const { stdout, stderr } = await execAsync(command);
            console.log('Command output:', stdout);
            if (stderr) {
                console.error('Command errors:', stderr);
            }
        } catch (wgetError) {
            console.error('Error executing wget:', wgetError.message);
            console.error('Ensure wget is installed and the command is correct.');
        }

        console.log('Cleaning up temporary file...');
        await unlink(tempFile);
        console.log('Download complete. Temporary file removed.');

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('Error: HAR file not found. Check the file path.');
        } else if (error.name === 'SyntaxError') {
            console.error('Error: Invalid HAR file. Ensure it is properly formatted JSON.');
        } else {
            console.error('Unexpected error:', error.message);
        }
    }
}

main();
