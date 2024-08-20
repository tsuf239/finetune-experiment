import {C_WEBSITE_URL} from "./constants";
import {add, divide, get_html, get_images_from_html, multiply} from "./helpers";

async function get_photos(url: string) {
  try {
    console.log(get_images_from_html(await get_html(url)));
  } catch (error) {
    console.error("Error fetching the webpage:", error);
  }
}

// Example usage
get_photos(C_WEBSITE_URL);

console.log(divide(27, 9));
console.log(add(27, 9, 8, 7));
console.log(multiply(27, 9, 8, 7));
