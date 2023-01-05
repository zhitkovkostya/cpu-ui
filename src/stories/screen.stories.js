import image1 from "./assets/images/image-1.png";
import image2 from "./assets/images/image-2.png";

export default {
  title: "Example/Screen",
  parameters: {
    layout: "fullscreen",
  },
};

export const Diary = () => `
  <style>
    @media all and (min-width: 1281px) {
      .grid {
        grid-template-areas: 
          'cell-01 .       .       .      '
          '.       .       .       cell-06'
          'cell-02 cell-02 cell-03 .      '
          '.       cell-04 cell-03 cell-05';
      }
    }
    
    @media all and (min-width: 768px) and (max-width: 1280px) {
      .grid {
        grid-template-areas: 
          'cell-01 cell-01'
          'cell-02 cell-02'
          'cell-03 cell-06'
          'cell-04 cell-05';
      }
    }
    
    @media all and (min-width: 0px) and (max-width: 767px) {
      .grid {
        grid-template-areas: 
          'cell-01'
          'cell-02'
          'cell-03'
          'cell-06'
          'cell-05'
          'cell-04';
      }
    }
  </style>

  <div class="section section--black">
    <div class="grid">
      <div class="grid__cell">
        <div class="text text--caps text--small text--medium-1">Message info ↆ
          From
          <nobr> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </nobr>= P15 "Rain Station"
          Date, DD.MM.YYYY
          <nobr> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </nobr>= 26.05.2022
          Time, HH:MM
          <nobr> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </nobr>= 01:52, GMT+3
          Type
          <nobr> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </nobr>= Operator diary
          Title
          <nobr> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </nobr>= Cite
          ■
        </div>
      </div>
      <div class="grid__cell">
        <div class="text text--big text--caps">The only ultimate disaster that can befall us, I have come to realise, is to feel ourselves to be at home here on Earth.
// Malcolm Muggerige</div>
      </div>
      <div class="grid__cell grid__cell--gray-middle" style="background-image: url(${image1})">
        <span class="text text--caps text--small text--light-5">Image ↆ</span>
      </div>
      <div class="grid__cell grid__cell--black">
        <div class="text text--small text--white">\`   \\
\\   \\

RSTN
        </div>
      </div>
      <div class="grid__cell grid__cell--dark-2">
        <div class="text text--small text--white text--caps">← →
Use arrows
        </div>
      </div>
      <div class="grid__cell" style="background-image: url(${image2})"></div>
    </div>
  </div>
`;
