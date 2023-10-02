import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from "@chakra-ui/react";

export function ProgressBar( {setlength}) {

  const useChange = (e)=> {
    setlength(e);
  }
  
  return (
    <Slider
      aria-label="slider-ex-2"
      colorScheme="blue" 
      step={1}
      min={0}
      size="lg"
      max={24}
      w="90%"
      onChange={(e)=>{useChange(e)}}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
