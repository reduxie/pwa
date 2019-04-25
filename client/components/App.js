import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from './AppBar';
import Paper from './Paper';
import JobList from './JobList';
import OutlinedButton from './OutlinedButton';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 900,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function generate(element) {
  return [ 0, 1, 2 ].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
    jobsArray: [
      {
        "link": "http://www.builtinnyc.com/job/engineer/security-engineer/48588",
        "jobTitle": "Security Engineer",
        "companyTitle": "Justworks",
        "description": "Justworks is seeking an experienced Security Engineer to join our Security team, focused on building tools, safeguards and countermeasures to continuously enhance our security posture as the threat landscape evolves. As a successful candidate, you have demonstrated experience building security solutions to enhance security and defend against threats. You have deep understanding of the fundamental of computing and development/coding with Ruby on Rails, JavaScript and/or other languages. The candidate should also have experience in *Nix environment and the use of common cybersecurity tools."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-software-developer-mobile-skills/52526",
        "jobTitle": "Senior Software Developer with Mobile Skills",
        "companyTitle": "ThoughtWorks",
        "description": "Work on medium- to large-scale, custom software systems that leverage mobile and web technologies.\nProvide expertise within teams of software engineers - both ThoughtWorkers and clients.\nCreate and implement significant, end-to-end business solutions on a variety of mobile platforms.\nWork with and influence large enterprises, innovative startups, as well as not-for-profit organizations.\nEmploy and advocate for modern technical practices like test automation, continuous integration/continuous delivery, and pair programming and how it pertains to the mobile atmosphere.\nConstantly learn and level up as you lead teams among different industries, technologies/languages, and parts of the country (or world!) with each new project experience."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-android-engineer/20062",
        "jobTitle": "Senior Android Engineer",
        "companyTitle": "Stash",
        "description": "As a Senior Android Engineer at Stash you will be a hands-on self-starter with a passion for innovation. You are someone who thrives in a fast-paced environment and can work closely with all aspects of the company to deliver high-quality solutions. There's no limit to the level of responsibility you can take on or the speed at which you can see your ideas take flight. "
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/software-engineer/52570",
        "jobTitle": "Software Engineer",
        "companyTitle": "Redesign Health",
        "description": "Redesign Health is looking for a Software Engineer to join the initial stages of a new DTC company that we're launching in the healthcare space. As an early employee, you’ll have the chance to define and work on the foundational elements of the company and work closely with the founding team.\nThe ideal candidate is passionate about creating a seamless customer experience and is able to drive and execute end-to-end web based customer journeys. You will plan, architect, build and own our main external-facing web app using React.js, JavaScript, CSS, Relay and GraphQL. You'll partner with the CTO and Head of Design to bring our customer touch-points to life and will be responsible for the technical execution of web projects through hands-on development and prototyping. In other words, you will bridge the gap between graphical design and technical implementation to create a user-friendly environment. This position reports directly to the CTO."
      },
      {
        "link": "http://www.builtinnyc.com/job/data/software-engineering-manager-data/52533",
        "jobTitle": "Software Engineering Manager - Data",
        "companyTitle": "Candid™",
        "description": "We are looking for an experienced Engineering Manager to join Candid™ who has a passion for utilizing data to make an impact on customer experience and growth. You will recruit, hire, and mentor engineers across our stack. You and your team will help build out our existing data pipelines, as well as interpret analytics and build reporting tools used by the whole business. You will be responsible for owning the development and maintenance of our pipelines, data analysis, and integration of third-party tools for our marketing, operations, and product teams. You will partner with various teams across the business to help extract meaningful analysis from the data we have collected. You will report directly to our VP of Engineering."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-mobile-software-engineer-ios-sdks/52509",
        "jobTitle": "Senior Mobile Software Engineer, iOS SDKs",
        "companyTitle": "JW Player",
        "description": "JW Player is looking for a Senior Mobile Software Engineer to join our Player SDKs team. The ideal candidate will have recent commercial experience developing native iOS applications, as well as applications built using a hybrid / WebView approach. This role will help lead the charge to enhance our JW Player SDK for iOS products to simplify the process of releasing video applications to mobile platforms."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/software-developer-mobile-skills/52527",
        "jobTitle": "Software Developer with Mobile Skills",
        "companyTitle": "ThoughtWorks",
        "description": "Work on medium- to large-scale, custom software systems that leverage mobile and web technologies.\nWork in teams of software engineers - both ThoughtWorkers and clients.\nHelp to create and implement significant, end-to-end business solutions on a variety of mobile platforms.\nWork with and influence large enterprises, innovative startups, as well as not-for-profit organizations.\nEmploy and advocate for modern technical practices like test automation, continuous integration/continuous delivery, and pair programming and how it pertains to the mobile atmosphere.\nConstantly learn and level up as you lead teams among different industries, technologies/languages, and parts of the country (or world!) with each new project experience."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-software-developer-mobile-skills/52526",
        "jobTitle": "Senior Software Developer with Mobile Skills",
        "companyTitle": "ThoughtWorks",
        "description": "Work on medium- to large-scale, custom software systems that leverage mobile and web technologies.\nProvide expertise within teams of software engineers - both ThoughtWorkers and clients.\nCreate and implement significant, end-to-end business solutions on a variety of mobile platforms.\nWork with and influence large enterprises, innovative startups, as well as not-for-profit organizations.\nEmploy and advocate for modern technical practices like test automation, continuous integration/continuous delivery, and pair programming and how it pertains to the mobile atmosphere.\nConstantly learn and level up as you lead teams among different industries, technologies/languages, and parts of the country (or world!) with each new project experience."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/lead-software-developer-mobile-skills/52525",
        "jobTitle": "Lead Software Developer with Mobile Skills",
        "companyTitle": "ThoughtWorks",
        "description": "Work on medium- to large-scale, custom software systems that leverage mobile and web technologies.\nLead teams of software engineers - both ThoughtWorkers and clients.\nCreate and implement significant, end-to-end business solutions on a variety of mobile platforms.\nWork with and influence large enterprises, innovative startups, as well as not-for-profit organizations.\nEmploy and advocate for modern technical practices like test automation, continuous integration/continuous delivery, and pair programming and how it pertains to the mobile atmosphere.\nConstantly learn and level up as you lead teams among different industries, technologies/languages, and parts of the country (or world!) with each new project experience."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-frontend-web-developer/52540",
        "jobTitle": "Senior Frontend Web Developer",
        "companyTitle": "UiPath",
        "description": "As a Senior Frontend Web Developer, you will lead or be part of an engineering team solving large enterprise business problems at scale and developing a new class of web platform services. You must have great problem-solving skills, deeply care of user experiences and have a data and metric driven mindset. The ideal candidate should be well-versed with the entire software development lifecycle and should be able to produce well-tested high-quality code. Apart from possessing strong technical skills, the candidate should show a strong bias for action, be adaptable and exhibit uninhibited entrepreneurial spirit with a can-do attitude. The candidate must also be able to take lead on analyzing complex technical issues, technology choices and communicate them with the team and stakeholders in both written and verbal manner to drive consensus. Our engineering leaders are hands-on technical leaders with a proven track record of building world-class diverse engineering teams and delivering customer value rapidly. If you enjoy building software with a broad range of technologies and being part of a smart, agile team that is motivated by solving hard business problems with technology, come join us!"
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-software-engineer-developer-experience/52502",
        "jobTitle": "Senior Software Engineer: Developer Experience",
        "companyTitle": "DigitalOcean",
        "description": " As a Senior Software Engineer within Developer Experience, you will think about how to present complex cloud infrastructure as simple, configurable tools for our customers. Working alongside Product and Design teams, and reporting to an Engineering Manager, you will decide how to build software that gets the most out of our products and services and helps developers scale their systems on DigitalOcean. You will also work within the broader engineering organization to improve the efficiency and performance of internal systems so that we can support our growing customer base."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/head-information-security/52537",
        "jobTitle": "Head of Information Security",
        "companyTitle": "DailyPay, Inc.",
        "description": "DailyPay is seeking a Head of Information Security that will serve as the company-wide authority on all matters that relate to the security of DailyPay’s information, data, and network. This role will report to the CTO and work closely with our internal operations team. This person will be responsible for the development and delivery of a comprehensive and ongoing information security strategy to optimize the security infrastructure of the organization. It is a unique opportunity for a subject-matter expert to build out DailyPay’s InfoSec practice as we scale our product with the primary goal of empowering financial security."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/frontend-engineer/52546",
        "jobTitle": "Frontend Engineer",
        "companyTitle": "Galileo",
        "description": "You are enthusiastic about mission-driven work and are eager to fix healthcare through developing technology. You have worked on iterative cross-functional product teams before, and enjoy finding optimal solutions that balance usability, extensibility, engineering investment, and business implications. Adapting to new technologies quickly doesn’t throw you, and you know how to use the right-sized approach for each problem. A true team player, you’re always on the hunt for ways to raise code quality and improve future developer experience. Finally, you hold your work to high standards and don’t shy away from owning ambitious projects. "
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/backend-engineer/52545",
        "jobTitle": "Backend Engineer",
        "companyTitle": "Galileo",
        "description": "You have experience in developing backend services, troubleshooting & debugging issues. Mission-driven work excites you, greatly and you’re eager to fix healthcare through new technology. You have worked on iterative, cross-functional product engineering teams before, and enjoy finding optimal solutions that balance usability, extensibility, engineering investment, and business implications. You are a great communicator and you take care to understand before making yourself understood. "
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/ios-engineer/52549",
        "jobTitle": "iOS Engineer",
        "companyTitle": "Galileo",
        "description": "You are enthusiastic about mission-driven work and are eager to fix healthcare through developing technology. You have worked on iterative cross-functional product teams before, and enjoy finding optimal solutions that balance usability, extensibility, engineering investment, and business implications. Adapting to new technologies quickly doesn’t throw you, and you know how to use the right-sized approach for each problem. A true team player, you’re always on the hunt for ways to raise code quality and improve future developer experience. Finally, you hold your work to high standards and don’t shy away from owning ambitious projects"
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/security-engineer/52553",
        "jobTitle": "Security Engineer",
        "companyTitle": "Galileo",
        "description": "You are interested in designing, building, and maintaining security systems, both locally (employee and patient devices) and in the cloud (AWS). You have hands-on experience performing vulnerability tests and security assessments, on both cloud infrastructure and application infrastructure. You keep up-to-date with the tech industry landscape of security threats, and know how to identify and patch relevant security holes. You enjoy using metrics to find and remedy anomalies. You have configured and maintained an alerting system through a Security Information and Events Management (SIEM) tool. You understand how to develop and enforce strict security and data access policies, regarding HIPAA assessments and evaluations. You are fluent in scripting languages, such as Python, Ruby, Bash, etc. You thrive in a collaborative environment, where responsibility and ownership are shared."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/tech-lead-digital-engineering/51552",
        "jobTitle": "Tech Lead - Digital Engineering",
        "companyTitle": "Peloton",
        "description": "Implement best practices in architectural design and mentor team in these practices.\nMotivate and drive a continuous performance based culture within the team.\nCollaborate with cross functional team members from Design, Product, Program Management and UX in order to deliver against quarterly and annual roadmap objectives including defining objectives and driving new architecture.\nEstablish team level KPIs to measure effectiveness of team’s output and impact to customer Engagement/\nInstill a culture of automation, re-use and engineering efficiency through the use of software design patterns and leveraging commercial, off the shelf tools/\nIdentify cross-functional dependencies and remove blockers when needed across engineering, design, and product management/\nAchieve on-time delivery without compromising quality."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-software-engineer-test-nyc/48888",
        "jobTitle": "Senior Software Engineer in Test - NYC",
        "companyTitle": "N26",
        "description": "We are The Mobile Bank.\nOur vision is to build a bank the world loves to use.\nTechnology and design empower everything we do.\n\nN26 is Europe’s first Mobile Bank with a full European banking license. We redesigned the banking experience to be simple, fast and contemporary. Founded in 2013 by Valentin Stalf and Maximilian Tayenthal, N26 has over 500 employees and 2 million customers in 24 countries. N26 has raised more than $215 million from"
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/product-security-engineer-nyc/45134",
        "jobTitle": "Product Security Engineer - NYC",
        "companyTitle": "N26",
        "description": "Use penetration testing skills and methodology to strengthen our internal and external applications and services.\nUse software engineering skills to build services for security related topics such as access management, continuous security testing, intrusion detection, fraud and abuse detection.\nUse systems engineering skills to architect and build out solutions and frameworks that address current and future threats.\nUse your knowledge of security architecture to help SWE’s build secure products and services.\nPerform application security design, threat modeling and code reviews.\nImprove engineering standards, tooling, and processes.\nDelve into large datasets to find significant features, anomalies and patterns.\nEnable other engineering teams to find flaws before they are introduced into production.\nPerform reactive incident response when a security event occurs.\nPerform proactive research to detect new attack vectors.\nConduct third party vendor due diligence to assess security risks.\nEducate technical and non-technical staff through our security awareness training program.\nImproving our customer education program."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-android-engineer-nyc/46932",
        "jobTitle": "Senior Android Engineer - NYC",
        "companyTitle": "N26",
        "description": "You strive to build Android applications that can be summarized as RSA - Responsive, Slick and Attractive. You also understand why RSA is important for a Mobile Bank from a cryptographic point of view.\nCode quality tingles your senses - you can see, feel and smell the difference between good and bad architecture.\nYou engage in proactive software development but still understand Reactive programming paradigms.\nYou'd rather take a Dagger to your heart than have flaky code sitting around for a long time.\nTest cases are the first things you think of before building a feature and the last things you check before pushing your code."
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-software-engineer-cloud/42712",
        "jobTitle": "Senior Software Engineer (Cloud)",
        "companyTitle": "Turbonomic",
        "description": "As a Senior Cloud Software Engineer, you will have the opportunity to make a massive impact and will be directly responsible for developing some of the most integral parts of the Turbonomic Platform that has already enabled over 2,000 customers to transform their businesses for the digital age. We are continuously thinking about the future of IT and constantly innovating to address trends in emerging technology. If you have a passion for cloud technologies, let’s talk!"
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-full-stack-software-engineer/40100",
        "jobTitle": "Senior Full-Stack Software Engineer",
        "companyTitle": "Turbonomic",
        "description": "About the team:\nAs the leader in workload automation for hybrid cloud, we're transforming the way IT operates. We're seeking the brightest and most driven individuals who are looking to steer the future of technology. If you thrive in a team-based environment where intellectual curiosity and willingness to go the extra mile without giving up are in your DNA, we want to hear from you!\nAs a full-stack software engineer, you will directly impact the"
      },
      {
        "link": "http://www.builtinnyc.com/job/engineer/senior-full-stack-software-engineer/40099",
        "jobTitle": "Senior Full-Stack Software Engineer",
        "companyTitle": "Turbonomic",
        "description": "About the team:\nAs the leader in workload automation for hybrid cloud, we're transforming the way IT operates. We're seeking the brightest and most driven individuals who are looking to steer the future of technology. If you thrive in a team-based environment where intellectual curiosity and willingness to go the extra mile without giving up are in your DNA, we want to hear from you!\nAs a full-stack software engineer, you will directly impact the"
      }
    ],
    checked: [ 0 ] //all checked list items,
  };

  handleToggle = value => () => {
    const job = this.state.jobsArray;
    const currentIndex = job.indexOf(value);
    const newChecked = [ ...checked ];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

  };

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
      <div className={classes.root}>

        <AppBar
          state={this.state}

        />
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" className={classes.title}>
              Job Postings
            </Typography>
            <div className={classes.demo}>
              <JobList
                jobsArray={this.state.jobsArray}
                checked={this.state.checked}
                handleToggle={this.handleToggle}
                postLink={this.postLink}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              ...
            </Typography>
            <Paper />
          </Grid>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
