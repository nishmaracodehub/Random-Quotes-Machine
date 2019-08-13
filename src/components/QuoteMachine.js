import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faTumblrSquare
} from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
  return (
    <Card>
      <CardContent>
        {selectedQuote ? (
          <Typography>
            <span
              id="text"
              style={{ display: "block", textAlign: "center", marginTop: 20 }}
            >
              {selectedQuote.quote}
            </span>
            <span
              id="author"
              style={{
                display: "block",
                textAlign: "center"
              }}
            >
              - {selectedQuote.author}
            </span>
          </Typography>
        ) : null}
        <CardActions>
          <IconButton
            style={{ color: "#1DA1F2" }}
            id="tweet-quote"
            target="_blank"
            href={encodeURI(
              `https://twitter.com/intent/tweet?text=${
                selectedQuote.quote
              }&hashtags=quotefortheday`
            )}
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
          </IconButton>
          <IconButton
            style={{ color: "#000" }}
            id="tweet-quote"
            target="_blank"
            href={encodeURI(`https://www.tumblr.com/`)}
          >
            <FontAwesomeIcon icon={faTumblrSquare} size="lg" />
          </IconButton>
          <Button
            style={{ marginLeft: "auto" }}
            id="new-quote"
            size="small"
            variant="contained"
            color="primary"
            onClick={assignNewQuoteIndex}
          >
            Next Quote{" "}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default QuoteMachine;
