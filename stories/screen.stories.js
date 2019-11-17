export default {
  title: 'Screen'
}

export const basic = () => `
    <style>
        .grid {
            grid-template-areas: 
            'cell-01 cell-02 .       .'
            '.       .       .       .'
            'cell-03 cell-03 cell-03 cell-03'
            'cell-04 cell-04 cell-04 cell-04';
        }
    </style>
    
    <div class="grid" style="background-image: url('/images/image-1.png')">
        <div class="grid__cell">
            <div class="text text--small text--white">< message info
                from
                id
                date
                time
                type
                
                received
                date
                time
                code
                response
                >
            </div>
        </div>
        <div class="grid__cell">
            <div class="text text--small text--white"><
                rstn149
                —
                04.06.2019 mdy
                01.04 /spbtz
                —
                
                —
                —
                —
                429
                std103
                >
            </div>
        </div>
        <div class="grid__cell grid__cell--gray-middle">
            <img src="/images/image-2.png" alt="Image" class="image">            
        </div>
        <div class="grid__cell grid__cell--gray-darkest">
            <div class="text text--small text--white">‵   \\
\\   \\

rstn
            </div>
        </div>
    </div>
`