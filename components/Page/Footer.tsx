import dynamic from "next/dynamic";
import { Grid, Link, Page, Text } from "@geist-ui/react";

// Icons
import GitHub from "@geist-ui/react-icons/github";

// Custom Components
const ButtonRound = dynamic(() => import("@/components/Button/Round"));

function PageFooter() {
  return (
    <Page.Footer
      style={{
        padding: "2rem 0",
      }}
    >
      <Grid.Container
        gap={0}
        direction="column"
        alignContent="center"
        alignItems="center"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid>
          <Text span b size={14} style={{ display: "block", margin: "8px 0" }}>
            Built by{" "}
            <Link
              href="https://vandreleal.github.io"
              rel="noopener"
              target="_blank"
            >
              Vandré
            </Link>
          </Text>

          <a
            href="https://www.buymeacoffee.com/vandre"
            rel="noopener"
            target="_blank"
          >
            <img
              alt="Buy Me A Coffee"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
              style={{ height: "50px !important", width: "180px !important" }}
            />
          </a>

          <Text size={10}>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              rel="noopener"
              target="_blank"
              title="Good Ware"
            >
              Good Ware
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              rel="noopener"
              target="_blank"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </Text>

          <ButtonRound
            aria-label="Star on GitHub"
            icon={<GitHub />}
            onClick={() => {
              window.open("https://github.com/vandreleal/sentineo");
            }}
            style={{ position: "fixed", right: 4, bottom: 16 }}
          />
        </Grid>
      </Grid.Container>
    </Page.Footer>
  );
}
export default PageFooter;
