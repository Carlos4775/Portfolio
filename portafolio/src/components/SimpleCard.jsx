import { useRef, useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { animated, useSpring } from "react-spring";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 24,
    padding: "10px 0px",
    display: "flex",
    justifyContent: "center",
    color: "#000",
  },
  subtitle: {
    padding: "10px 0px",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    padding: "10px 0px",
    textAlign: "center",
  },
  icon: {
    height: "80px",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default function SimpleCard({ title, icon, subtitle, text }) {
  const classes = useStyles();
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });
  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.to(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      <Card
        className={classes.root}
        style={{
          borderTop: "9px solid #73CCA8",
          borderRadius: "6px",
          backgroundColor: "#F6F6F6",
          minHeight: "350px",
        }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <div className={classes.icon}>{icon}</div>
          <Typography className={classes.subtitle} color="textSecondary">
            {subtitle}
          </Typography>
          <Typography variant="body2" className={classes.text}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </animated.div>
  );
}
