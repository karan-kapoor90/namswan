const sharp = require('sharp');
const fs = require('fs');
const path = require( 'path' );

const moveFrom = __dirname+"/assets/images";
const moveTo = __dirname+"/assets/images/used";

// Make an async function that gets executed immediately
(async ()=>{
    // Our starting point
    try {
        // Get the files as an array
        const files = await fs.promises.readdir( moveFrom );

        // Loop them all with the new for...of
        for( const file of files ) {
            // Get the full paths
            const fromPath = path.join( moveFrom, file );
            const toPath = path.join( moveTo, file );

            // Stat the file to see if we have a file or dir
            const stat = await fs.promises.stat( fromPath );

            if( stat.isFile() )
            sharp(fromPath)
                .resize(930)
                .toBuffer()
                .then( data => {
                    const mymap =fs.readdirSync(moveTo).map(fileName => {
                        console.log(moveTo,fileName);
                        return path.join(moveTo, fileName)
                      });
                    
                    fs.writeFileSync(toPath, data);
                    fs.unlinkSync(fromPath);
                })
                .catch( err => {
                    console.log(err);
                });
                
            else if( stat.isDirectory() )
                console.log( "'%s' is a directory.", fromPath );

            // Now move async
            // await fs.promises.rename( fromPath, toPath );
            // Log because we're crazy
            // console.log( "Moved '%s'->'%s'", fromPath, toPath );
        } // End for...of
    }
    catch( e ) {
        // Catch anything bad that happens
        console.error( "We've thrown! Whoops!", e );
    }

})(); // Wrap in parenthesis and call now



// sharp('yellow.jpg')
//     .resize(930)
//     .toBuffer()
//     .then( data => {
//         const mymap =fs.readdirSync(__dirname+'/new').map(fileName => {
//             console.log(__dirname+'/new/',fileName);
//             return path.join(__dirname+'/new/', fileName)
//           });
//         if (mymap.length ==0) {
//             console.log('No new files to resize');
//         } else {
//             mymap.forEach(
//                 testFunction()
//             )
//         }
//         fs.writeFileSync('yellow-new.jpg', data);
//     })
//     .catch( err => {
//         console.log(err);
//     });												
								
// function testFunction() {
//     console.log('In the function now')
// }