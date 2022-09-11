<<<<<<< HEAD
import React, { useEffect } from "react";
import { useFetch } from "../../usefetch";
import "../cardsLoby/spotifyapicss.css";
export const CardsUpdated = () => {
  const url = "https://api.spotify.com/v1/browse/new-releases";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.albums && data.albums.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.albums.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);

  return (
    <div className="loby">
      <div className="title">
        <h2>Stay Updated</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { artists, id, images, name, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div className="card-detail">
                    <h4>{name}</h4>
                    <p>{artists[0].name}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

////////MOOD LOBY ////////

export const CardsMood = () => {
  const url =
    "https://api.spotify.com/v1/browse/categories/edm_dance/playlists";
  const url2 = "https://api.spotify.com/v1/browse/categories";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.playlists && data.playlists.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.playlists.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);
  console.log(data);
  return (
    <div className="loby">
      <div className="title">
        <h2>edm dance</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { description, id, images, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

//////////HIPHOP LOBY////////////

export const CardsHipHop = () => {
  const url = "https://api.spotify.com/v1/browse/categories/hiphop/playlists";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.playlists && data.playlists.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.playlists.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);

  return (
    <div className="loby">
      <div className="title">
        <h2>hiphop</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { description, id, images, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

//////////// Rock Loby ////////////

export const CardsRock = () => {
  const url = "https://api.spotify.com/v1/browse/categories/rock/playlists";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.playlists && data.playlists.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.playlists.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);

  return (
    <div className="loby">
      <div className="title">
        <h2>Rock</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { description, id, images, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
=======
import React, { useEffect } from "react";
import { useFetch } from "../../usefetch";
import "../cardsLoby/spotifyapicss.css";
export const CardsUpdated = () => {
  const url = "https://api.spotify.com/v1/browse/new-releases";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.albums && data.albums.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.albums.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);

  return (
    <div className="loby">
      <div className="title">
        <h2>Stay Updated</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { artists, id, images, name, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div className="card-detail">
                    <h4>{name}</h4>
                    <p>{artists[0].name}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

////////MOOD LOBY ////////

export const CardsMood = () => {
  const url = "https://api.spotify.com/v1/browse/categories/mood/playlists";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.playlists && data.playlists.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.playlists.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);
  console.log(data);
  return (
    <div className="loby">
      <div className="title">
        <h2>mood</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { description, id, images, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

//////////HIPHOP LOBY////////////

export const CardsHipHop = () => {
  const url = "https://api.spotify.com/v1/browse/categories/hiphop/playlists";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.playlists && data.playlists.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.playlists.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);

  return (
    <div className="loby">
      <div className="title">
        <h2>hiphop</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { description, id, images, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

//////////// Rock Loby ////////////

export const CardsRock = () => {
  const url = "https://api.spotify.com/v1/browse/categories/rock/playlists";
  const { data, setData } = useFetch(url);

  useEffect(() => {
    if (data && data.playlists && data.playlists.items) {
      let randomItems = new Set();
      while (randomItems.size < 7) {
        randomItems.add(data.playlists.items[Math.floor(Math.random() * 19)]);
      }
      setData(randomItems);
    }
  }, [data]);

  return (
    <div className="loby">
      <div className="title">
        <h2>Rock</h2>
      </div>
      <div className="card-loby">
        {data &&
          Array.from(data).map((item) => {
            const { description, id, images, external_urls } = item;
            return (
              <a href={external_urls.spotify} target="blank">
                <div key={id} className="card-content">
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                    }}
                  ></div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
>>>>>>> fb76bbd39e2dc5799870514b55808637c8a6d9c3
