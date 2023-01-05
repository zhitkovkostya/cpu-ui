import image3 from "./assets/images/image-1.png";

export default {
  title: "Components/Section",
  parameters: {
    layout: "fullscreen",
  },
};

export const basic = () => `
  <div class="section">
    <div class="grid">
      <div class="grid__cell">
        <span class="text">Section</span>
      </div>
    </div>
  </div>
`;

export const colored = () => `
  <div class="section section--gray-light">
    <div class="grid">
      <div class="grid__cell">
        <span class="text">Section</span>
      </div>
    </div>
  </div>
`;

export const withImage = () => `
  <div class="section" style="background-image: url(${image3})">
    <div class="grid">
      <div class="grid__cell">
        <span class="text">Section</span>
      </div>
    </div>
  </div>
`;
