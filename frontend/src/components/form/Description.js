const Description = () => {
  return (
    <div className='description'>
      <h2>Description</h2>
      <p>
        Ragnarock AI is an AI that creates free custom levels for&nbsp;
        <a
          href='https://www.oculus.com/experiences/quest/3749621795127676/'
          target='_blank'
          rel='noopener noreferrer'>
          Ragnarock
        </a>
        , a VR rhythm game.
      </p>
      <p>
        Given a song, this system will output a Ragnarock level that is matched
        with that song! We plan to continually update our model to generate
        better, more playable maps for all kinds of songs, so keep checking
        back!
      </p>
      <p>Difficulties:</p>
      <ul>
        <li>Easy: Level 1-2</li>
        <li>Normal: Level 3-4</li>
        <li>Hard: Level 5-6</li>
        <li>Expert: Level 7-8</li>
        <li>Expert+: Level 9-10</li>
      </ul>
    </div>
  );
};

export default Description;
