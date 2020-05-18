import { Component } from "react";
import Container from "./container";
import styles from "./header.module.scss";

interface Props {
  home: boolean | undefined;
}

interface State {
  scrolled: boolean;
}

export default class Header extends Component<Props, State> {
  state = {
    scrolled: false,
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { home } = this.props;

    if (home) {
      window.addEventListener("scroll", (ev: Event) => {
        const main = document.getElementById("main");
        console.log(main);
        console.log(window.scrollY);
        // check if 75% scrolled
        if (main) {
          const isScrolled = (main.offsetTop / 4) * 3 < window.scrollY;
          if (isScrolled && !this.state.scrolled) {
            this.setState({ scrolled: true });
          } else if (this.state.scrolled && !isScrolled) {
            this.setState({ scrolled: false });
          }
        }
      });
    }
  }

  render() {
    let className = `${styles.header}`;
    console.log(this.state.scrolled);
    if (this.state.scrolled) {
      className = styles.scrolled;
    }
    return (
      <header className={className}>
        <Container>
          <img src="/images/profile.jpg"></img>
        </Container>
      </header>
    );
  }
}
