export default {
  title: 'Screen'
}

export const basic = () => `
    <style>
        @media all and (min-width: 1281px) {
            #section429 .grid {
                grid-template-areas: 
                    'cell-01 cell-02 .       .      '
                    '.       .       .       .      '
                    'cell-03 cell-03 cell-03 cell-03'
                    'cell-04 cell-04 cell-04 cell-05';
            }
        }
        
        @media all and (min-width: 768px) and (max-width: 1280px) {
            #section429 .grid {
                grid-template-areas: 
                    'cell-01 cell-02'
                    'cell-03 cell-03'
                    'cell-04 cell-05';
            }
        }
        
        @media all and (min-width: 0px) and (max-width: 767px) {
            #section429 .grid {
                grid-template-areas: 
                    'cell-01'
                    'cell-02'
                    'cell-03'
                    'cell-04'
                    'cell-05';
            }
        }
        
        @media all and (min-width: 1281px) {
            #section439 .grid {
                grid-template-areas: 
                    'cell-01 cell-02 .       .      '
                    'cell-03 cell-03 cell-03 cell-03'
                    'cell-04 cell-05 .       .'
                    'cell-06 .       .       cell-07';
            }
        }
        
        @media all and (min-width: 768px) and (max-width: 1280px) {
            #section439 .grid {
                grid-template-areas: 
                    'cell-01 cell-02'
                    'cell-03 cell-03'
                    'cell-04 cell-05'
                    'cell-06 cell-07';
            }
        }
        
        @media all and (min-width: 0px) and (max-width: 767px) {
            #section439 .grid {
                grid-template-areas: 
                    'cell-01'
                    'cell-02'
                    'cell-03'
                    'cell-04'
                    'cell-05'
                    'cell-06'
                    'cell-07';
            }
        }
    </style>
    
    <div class="section" id="section429" style="background-image: url('/images/image-1.png');">
        <div class="grid">
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
            <div class="grid__cell grid__cell--gray-darkest">
                <div class="text text--small text--white">← →
    use arrows
                </div>
            </div>
        </div>
    </div>
`

export const screen439 = () => `
    <style>
       
        @media all and (min-width: 1281px) {
            #section439 .grid {
                grid-template-areas: 
                    'cell-01 cell-02 .       .      '
                    'cell-03 cell-03 cell-03 cell-03'
                    'cell-04 cell-05 .       .'
                    'cell-06 .       .       cell-07';
            }
        }
        
        @media all and (min-width: 768px) and (max-width: 1280px) {
            #section439 .grid {
                grid-template-areas: 
                    'cell-01 cell-02'
                    'cell-03 cell-03'
                    'cell-04 cell-05'
                    'cell-06 cell-07';
            }
        }
        
        @media all and (min-width: 0px) and (max-width: 767px) {
            #section439 .grid {
                grid-template-areas: 
                    'cell-01'
                    'cell-02'
                    'cell-03'
                    'cell-04'
                    'cell-05'
                    'cell-06'
                    'cell-07';
            }
        }
    </style>
    
    
    <div class="section section--gray-light" id="section439">
        <div class="grid">
            <div class="grid__cell">
                <div class="text text--small">< message info
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
                <div class="text text--small"><
                    rstn149
                    —
                    04.08.2019 mdy
                    00.40 /spbtz
                    —
                    
                    —
                    —
                    —
                    439
                    std103
                    >
                </div>
            </div>
            <div class="grid__cell">
                <div class="text text--big">The only ultimate disaster that can befall us, I have come to realise, is to feel ourselves to be at home here on Earth.
// Malcolm Muggerige</div>
            </div>
            <div class="grid__cell" style="background-image: url('/images/image-3.png')"></div>
            <div class="grid__cell" style="background-image: url('/images/image-4.png')"></div>
            <div class="grid__cell">
                <div class="text text--small">‵   \\
    \\   \\
    
    rstn
                </div>
            </div>
            <div class="grid__cell">
                <div class="text text--small">← →
    use arrows
                </div>
            </div>
        </div>
    </div>
`

export const screen429 = () => `
    <style>
       
        @media all and (min-width: 1281px) { 
            #section429 .grid:nth-child(1) {
                grid-template-areas: 
                    'cell-01 cell-01 cell-01 cell-01'
                    'cell-01 cell-01 cell-01 cell-01'
                    'cell-01 cell-01 cell-01 cell-01'
                    'cell-01 cell-01 cell-01 cell-01';
            }
            
            #section429 .grid:nth-child(2) {
                grid-template-areas: 
                    'cell-01 cell-02 .       .      '
                    '.       .       .       .      '
                    '.       .       .       .      '
                    '.       cell-03 cell-04 cell-05';
            }
        }
        
        @media all and (min-width: 768px) and (max-width: 1280px) {
            #section429 .grid:nth-child(1) {
                grid-template-areas: 
                    'cell-01 cell-01'
                    'cell-01 cell-01'
                    'cell-01 cell-01'
                    'cell-01 cell-01';
            }
            
            #section429 .grid:nth-child(2) {
                grid-template-areas: 
                    'cell-01 cell-02'
                    '.       cell-04'
                    'cell-05 cell-03';
            }
        }
        
        @media all and (min-width: 0px) and (max-width: 767px) {
            #section429 .grid:nth-child(1) {
                grid-template-areas: 
                    'cell-01'
                    'cell-01'
                    'cell-01'
                    'cell-01'
                    'cell-01';
            }
            
            #section429 .grid:nth-child(2) {
                grid-template-areas: 
                    'cell-01'
                    'cell-02'
                    'cell-04'
                    'cell-05'
                    'cell-03';
            }
        }
    </style>
    
    
    <div class="section" id="section429">
        <div class="grid">
            <div class="grid__cell">
                <div class="text text--big text--gray-light">The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the light into the peace and safety of a new dark age. // H. P. Lovecraft (The Call of Cthulhu, 1928)</div>
            </div>
        </div>
        
        <div class="grid">
            <div class="grid__cell">
                <div class="text text--small">< message info
                    from
                    id
                    date
                    time
                    type
                    .
                    track
                    artist
                    album
                    .
                    received
                    date
                    time
                    code
                    response
                    >
                </div>
            </div>
            <div class="grid__cell">
                <div class="text text--small"><
                    rstn149
                    —
                    04.06.2019 mdy
                    01.04 /spbtz
                    —
                    .
                    corrupt data
                    pye corner audio
                    half-light
                    .
                    —
                    —
                    —
                    429
                    std103
                    >
                </div>
            </div>
            <div class="grid__cell grid__cell--bottom">
                <div class="text text--small">‵   \\
    \\   \\
    
    rstn
                </div>
            </div>
            <div class="grid__cell" style="background-image: url('/images/image-5.png')"></div>
            <div class="grid__cell">
                <div class="text text--small">← →
    use arrows
                </div>
            </div>
        </div>
    </div>
`