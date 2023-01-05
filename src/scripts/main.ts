import { debounce } from "./debounce";
import { updateHash } from "./update-hash";

window.addEventListener("scroll", debounce(updateHash));
