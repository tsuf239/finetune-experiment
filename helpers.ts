import * as cheerio from "cheerio";

export const get_html = async (url: string) => {
  // Fetch the HTML of the page
  const res = await fetch(url);
  return res.text();
};

export const get_images_from_html = (html: string) => {
  // Load the HTML into cheerio
  const $ = cheerio.load(html);

  // Array to store image URLs
  let images: string[] = [];

  // Find all image elements and get their 'src' attributes
  $("img").each((_, element) => {
    const imgSrc = $(element).attr("src") as string;
    if (imgSrc) {
      images.push(imgSrc);
    }
  });

  return images;
};

export const add = (...args: number[]) => {
  return args.reduce((sum, arg) => sum + arg, 0);
};

export const divide = (a, b) => {
  return a / b;
};

export const multiply = (...args: number[]) => {
  return args.reduce((sum, arg) => sum * arg);
};
