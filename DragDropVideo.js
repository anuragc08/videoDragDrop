import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function DragDropVideo() {
  const onDragStart = (e) => {
    let video = document.getElementById("videoId");
    video.pause();
    e.dataTransfer.setData("video", e.target.id);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("video");
    e.target.appendChild(document.getElementById(data));
  };

 
  const Video = function () {
    return (
      <div>
        <video
          controls
          autoPlay={false}
          id="videoId"
          src={
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
          }
          width="200px"
          height="300px"
          draggable="true"
        />
      </div>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col
          md={6}
          className="show-top-left"
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        ></Col>
        <Col
          md={6}
          className="show-top-right"
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        ></Col>
      </Row>
      <Row>
        <Col
          md={6}
          className="show-bottom-left"
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          {" "}
          <Video />
        </Col>
        <Col
          md={6}
          className="show-bottom-right"
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        ></Col>
      </Row>
    </Container>
  );
}

export default DragDropVideo;
