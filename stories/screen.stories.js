export default {
  title: 'Screen'
}

export const basic = () => `
    <style>
        .grid {
            grid-template-areas: 
            'cell-01 cell-01 cell-01 cell-01'
            'cell-01 cell-01 cell-01 cell-01'
            'cell-02 cell-02 cell-02 cell-02'
            'cell-03 cell-03 cell-03 cell-03';
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
        <div class="grid__cell grid__cell--gray-middle">1</div>
        <div class="grid__cell grid__cell--gray-darkest">
            <div class="text text--small text--white">‵   \\
\\   \\

rstn
            </div>
        </div>
    </div>
`