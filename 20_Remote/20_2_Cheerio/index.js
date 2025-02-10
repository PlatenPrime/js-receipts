import { load } from 'cheerio';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const url =
  'https://www.consumerfinance.gov/data-research/mortgage-performance-trends/mortgages-30-89-days-delinquent/';

(async () => {
  try {
    const response = await fetch(url);
    const body = await response.text();
    const $ = load(body);

    $("a:contains('state')").each(async (i, element) => {
      try {
        const fileUrl = element.attribs.href;
        const fetchFile = await fetch(fileUrl);
        
        if (!fetchFile.ok) {
          throw new Error(`Failed to fetch ${fileUrl}: ${fetchFile.statusText}`);
        }

        const dest = createWriteStream(`data-${i}.csv`);
        const nodeStream = fetchFile.body;

        await pipelineAsync(nodeStream, dest);
        console.log(`Downloaded: data-${i}.csv`);
      } catch (err) {
        console.error(`Error downloading file ${i}:`, err);
      }
    });
  } catch (error) {
    console.error('Main Error:', error);
  }
})();
