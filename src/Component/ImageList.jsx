import React, { Fragment } from 'react';

export default function ImageList(props) {
    let { images, loading } = props.Images;
    console.log(images);

    let ImagesBlock = images.map((image) => {
        return (
            <Fragment key={image.id}>
                <section className="imgBlock">
                    <div className="img">
                        <div className="details">
                            <img src={image.urls.regular} alt={image.name} />
                            <p>Likes {image.likes}</p>
                            <p>{image.description}</p>
                            <p>Uploaded by : {image.created_at}</p>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    });

    let LoadingBlock = (
        <Fragment>
            <section>
                <article>
                    <p>Loading...</p>
                </article>
            </section>
        </Fragment>
    );

    return (
        <div>
            <Fragment>
                <div className="container" style={{ width: "1200px", margin: "0 auto" }} >
                    {loading ? ImagesBlock : LoadingBlock}
                </div>
            </Fragment>
        </div>
    );
}

