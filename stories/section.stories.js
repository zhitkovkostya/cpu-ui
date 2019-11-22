export default {
  title: 'Section'
}

export const basic = () => `
    <div class="section">
        
    </div>
`

export const bordered = () => `
    <div class="grid grid--bordered">
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>
        <div class="grid__cell"></div>  
    </div>
`

export const colored = () => `
    <div class="grid">
        <div class="grid__cell grid__cell--black">
            <div class="text">1</div>
        </div>    
        <div class="grid__cell grid__cell--gray-darkest">
            <div class="text">2</div>
        </div>    
        <div class="grid__cell grid__cell--gray-dark">
            <div class="text">3</div>
        </div>    
        <div class="grid__cell grid__cell--gray-middle">
            <div class="text">4</div>
        </div>    
        <div class="grid__cell grid__cell--gray-light">
            <div class="text">5</div>        
        </div>    
        <div class="grid__cell grid__cell--white">
            <div class="text">6</div>
        </div>    
    </div>
`

export const withImage = () => `
    <div class="grid" style="background-image: url('/images/image-1.png')"></div>
`
