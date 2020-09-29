import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

import AddToCart from './AddToCart';
import OriginalTag from './OriginalTag';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map(
      ({ id, original, priceCode, src, title }, index) => {
        return (
          <section className="gallery" key={id}>
            <span
              style={{
                backgroundImage: `url(${src})`,
                cursor: 'pointer',
                outline: '0px',
              }}
              onClick={e => this.openLightbox(index, e)}
              onKeyDown={e => this.openLightbox(index, e)}
              className="image"
              role="link"
              tabIndex={0}
            >
              <img
                style={{ display: 'None' }}
                src={src}
                alt={title}
                title={title}
              />
            </span>
            <h2>
              <strong>{title}</strong>
            </h2>
            {original === 'TRUE' && <OriginalTag />}
            <AddToCart id={id} title={title} priceCode={priceCode} />
          </section>
        );
      }
    );

    return <> {gallery} </>;
  }
  render() {
    return (
      <>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images.map(img => {
            img.caption = `${img.title}`;
            return img;
          })}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
