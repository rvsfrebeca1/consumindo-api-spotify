import getAlbumCover from "../utils/getsAlbumCover";
import getArtistsNames from "../utils/getArtistsNames";


export default function Card({ track }) {
  const { name, album, external_urls, artists } = track;
  return (
    <div className="card">
      <a href={external_urls.spotify}>
        <img src={getAlbumCover(album)} alt={`${name} album cover`} />
      </a>
      <b>{name}</b>- {getArtistsNames(artists)}
    </div>
  );
}