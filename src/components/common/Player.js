import { Player as VimePlayer, Hls, Video, Ui } from "@vime/react";

const Player = () => {
  return (
    <VimePlayer controls>
      <Video crossOrigin="" poster="https://media.vimejs.com/poster.png">
        {/* These are passed directly to the underlying HTML5 `<video>` element. */}
        {/* Why `data-src`? Lazy loading, you can always use `src` if you prefer.  */}
        <source data-src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
        <track default kind="subtitles" src="https://media.vimejs.com/subs/english.vtt" srcLang="en" label="English" />
      </Video>
    </VimePlayer>
  );
};

export default Player;
