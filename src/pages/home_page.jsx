import {
  IconButton,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/react';
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from 'react-icons/fa';
import video from '../assets/video.mp4';
import SectionLayout from '../component/section_layout';
import useVideoController from '../custom_hook/vide_controller';

const HomePage = () => {
  const {
    videoRef,
    isPlaying,
    isMuted,
    progress,
    currentTime,
    duration,
    togglePlay,
    toggleMute,
    handleSeek,
    handleFullScreen,
  } = useVideoController();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <>
      <div className="video-container">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted={isMuted}
          loop
          className="video-element"
        />

        <div className="controls-container">
          {/* Controls ABOVE the progress bar */}
          <HStack justify="space-between" mb={2}>
            {/* Left side: Play/Pause and Time */}
            <HStack spacing={4} align="center">
              <IconButton
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlay}
                colorScheme="whiteAlpha"
                aria-label="Play/Pause"
              />
              <Text color="white" fontSize="sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </Text>
            </HStack>

            {/* Right side: Volume and Fullscreen controls */}
            <HStack spacing={4}>
              <IconButton
                icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                onClick={toggleMute}
                colorScheme="whiteAlpha"
                aria-label="Mute/Unmute"
              />
              <IconButton
                icon={<FaExpand />}
                onClick={handleFullScreen}
                colorScheme="whiteAlpha"
                aria-label="Fullscreen"
              />
            </HStack>
          </HStack>

          {/* Progress bar BELOW the buttons */}
          <Slider value={progress} onChange={handleSeek}>
            <SliderTrack>
              <SliderFilledTrack bg="red.500" />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
      </div>

      <SectionLayout />
    </>
  );
};

export default HomePage;
