import {useEffect, useState} from 'react';
import { useWindowSize } from '@tofusoup429/use-window-size';
import { useCamera } from './useCamera';
 
const FullScreenMobileView = () => {
    let {width, height} = useWindowSize() // get window width and height as everytime screen resized. 
    const {captureImage ,imageData, switchCameraFacingMode} = useCamera(); // customHook that contains logics
    const [imageDatas, handleImageDatas] = useState<string[]>([]) // capture imageUrls are saved in this state. 
    
    useEffect(()=>{
        //whenever imageData changed, which means captureImage is executed, imageUrl is cumulated in the array. 
        handleImageDatas([...imageDatas, imageData]) 
    }, [imageData])
    console.log(111, width)
    
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"flex-start"}}>
            <div className="VideoAndCanvas">
                <video width={width} style={{objectFit:'contain'}} />
                <canvas style={{opacity:0}} />
            </div>
            {imageDatas.length>0 && 
            <div id="Images" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap', margin:'1%', padding:'1%' }}>
                {
                    imageDatas.map((imageData, index)=>{
                        return(
                            imageData.length>10 && <img key={index} src={imageData} width={width*0.45} alt='NoImage'/>
                        )
                    })
                }
            </div>
            }
            
        </div>
    ) 
}

export default FullScreenMobileView;