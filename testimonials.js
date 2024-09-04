import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Position: 'Podcast Junkie',
  heading1: 'Testimonials',
  author4Alt: 'Image of David Brown',
  author1Position: 'Music Enthusiast',
  author2Alt: 'Image of Michael Smith',
  author3Position: 'Fitness Instructor',
  author3Src:
    'https://images.unsplash.com/photo-1570158268183-d296b2892211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDQ5NzA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'David Brown',
  review3:
    'Spotify Clone has a great selection of workout playlists that keep me motivated during my fitness classes.',
  review4:
    'As a music producer, I appreciate the high-quality audio streaming on Spotify Clone. It helps me analyze tracks with precision.',
  author1Src:
    'https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDQ5NzA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Michael Smith',
  author3Alt: 'Image of Emily Davis',
  author1Alt: 'Image of Sarah Johnson',
  author3Name: 'Emily Davis',
  author1Name: 'Sarah Johnson',
  review1: '5 stars',
  author2Src:
    'https://images.unsplash.com/photo-1491843964310-3ea9ad776ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDQ5NzA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'I love using Spotify Clone! It has all the features I need to discover new music and create playlists for every mood.',
  author4Position: 'Music Producer',
  review2:
    'Spotify Clone is my go-to platform for listening to podcasts. The user-friendly interface makes it easy to navigate through different episodes.',
  author4Src:
    'https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDQ5NzA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  heading1: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author3Src: PropTypes.string,
  author4Name: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
  author1Src: PropTypes.string,
  author2Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Name: PropTypes.string,
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  author2Src: PropTypes.string,
  content1: PropTypes.string,
  author4Position: PropTypes.string,
  review2: PropTypes.string,
  author4Src: PropTypes.string,
}

export default Testimonial
