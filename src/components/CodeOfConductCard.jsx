import React from "react";

function CodeOfConductCard() {
  return (
    <>
      <div className="p-4 p-md-5 border rounded-3 mb-5">
        <div className="mx-auto p-2 px-5">
          <h3 className="display-6">Contributor Covenant Code of Conduct</h3>
          <hr />
          <h5 className="lead">Our Pledge</h5>
          <p>
            We as members, contributors, and leaders pledge to make
            participation in our community a harassment-free experience for
            everyone, regardless of age, body size, visible or invisible
            disability, ethnicity, sex characteristics, gender identity and
            expression, level of experience, education, socio-economic status,
            nationality, personal appearance, race, religion, or sexual identity
            and orientation.
          </p>
          <h5 className="lead">Our Standards</h5>
          <p>
            Examples of behavior that contributes to a positive environment for
            our community include:
          </p>
          <ul>
            <li> Demonstrating empathy and kindness toward other people </li>
            <li>
              {" "}
              Being respectful of differing opinions, viewpoints, and
              experiences{" "}
            </li>
            <li> Giving and gracefully accepting constructive feedback </li>
            <li>
              {" "}
              Accepting responsibility and apologizing to those affected by our
              mistakes, and learning from the experience{" "}
            </li>
            <li>
              {" "}
              Focusing on what is best not just for us as individuals, but for
              the overall community{" "}
            </li>
          </ul>
          <p>Examples of unacceptable behavior include:</p>
          <ul>
            <li>
              {" "}
              The use of sexualized language or imagery, and sexual attention or
              advances of any kind{" "}
            </li>
            <li>
              {" "}
              Trolling, insulting or derogatory comments, and personal or
              political attacks{" "}
            </li>
            <li> Public or private harassment </li>
            <li>
              {" "}
              Publishing others' private information, such as a physical or
              email address, without their explicit permission{" "}
            </li>
            <li>
              {" "}
              Other conduct which could reasonably be considered inappropriate
              in a professional setting{" "}
            </li>
          </ul>
          <h5 className="lead">Enforcement Responsibilities</h5>
          <p>
            Community leaders are responsible for clarifying and enforcing our
            standards of acceptable behavior and will take appropriate and fair
            corrective action in response to any behavior that they deem
            inappropriate, threatening, offensive, or harmful. Community leaders
            have the right and responsibility to remove, edit, or reject
            comments, commits, code, wiki edits, issues, and other contributions
            that are not aligned to this Code of Conduct, and will communicate
            reasons for moderation decisions when appropriate.
          </p>
          <h5 className="lead">Scope</h5>
          <p>
            This Code of Conduct applies within all community spaces, and also
            applies when an individual is officially representing the community
            in public spaces. Examples of representing our community include
            using an official e-mail address, posting via an official social
            media account, or acting as an appointed representative at an online
            or offline event.
          </p>
          <h5 className="lead">Enforcement</h5>
          <p>
            Instances of abusive, harassing, or otherwise unacceptable behavior
            may be reported to the community leaders responsible for enforcement
            at{" "}
            <a href="mailto:cloydvansecuya@gmail.com">
              <b>cloydvansecuya@gmail.com</b>
            </a>{" "}
            All complaints will be reviewed and investigated promptly and
            fairly. All community leaders are obligated to respect the privacy
            and security of the reporter of any incident.
          </p>
          <h5 className="lead">Enforcement Guidelines</h5>
          <p>
            Community leaders will follow these Community Impact Guidelines in
            determining the consequences for any action they deem in violation
            of this Code of Conduct:
          </p>
          <h6>1. Correction</h6>
          <p>
            **Community Impact**: Use of inappropriate language or other
            behavior deemed unprofessional or unwelcome in the community.
            **Consequence**: A private, written warning from community leaders,
            providing clarity around the nature of the violation and an
            explanation of why the behavior was inappropriate. A public apology
            may be requested.
          </p>
          <h6>2. Warning</h6>
          <p>
            **Community Impact**: A violation through a single incident or
            series of actions. **Consequence**: A warning with consequences for
            continued behavior. No interaction with the people involved,
            including unsolicited interaction with those enforcing the Code of
            Conduct, for a specified period of time. This includes avoiding
            interactions in community spaces as well as external channels like
            social media. Violating these terms may lead to a temporary or
            permanent ban.
          </p>
          <h6>3. Temporary Ban</h6>
          <p>
            **Community Impact**: A serious violation of community standards,
            including sustained inappropriate behavior. **Consequence**: A
            temporary ban from any sort of interaction or public communication
            with the community for a specified period of time. No public or
            private interaction with the people involved, including unsolicited
            interaction with those enforcing the Code of Conduct, is allowed
            during this period. Violating these terms may lead to a permanent
            ban.
          </p>
          <h6>4. Permanent Ban</h6>
          <p>
            **Community Impact**: Demonstrating a pattern of violation of
            community standards, including sustained inappropriate behavior,
            harassment of an individual, or aggression toward or disparagement
            of classes of individuals. **Consequence**: A permanent ban from any
            sort of public interaction within the community.
          </p>
          <h5 className="lead">Attribution</h5>
          <p>
            This Code of Conduct is adapted from the{" "}
            <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.">
              Contributor Covenant
            </a>{" "}
            Community Impact Guidelines were inspired by{" "}
            <a href="https://github.com/mozilla/diversity">
              Mozilla's code of conduct enforcement ladder.
            </a>{" "}
            For answers to common questions about this code of conduct, see the
            FAQ at{" "}
            <a href="https://www.contributor-covenant.org/faq">
              Contributor Convenant FAQ
            </a>{" "}
            Translations are available at
            https://www.contributor-covenant.org/translations.
          </p>
        </div>
      </div>
    </>
  );
}

export default CodeOfConductCard;
