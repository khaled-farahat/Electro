import {
  ChooseButton,
  MostPopular,
  PlanContainer,
  PricingContainer,
  PricingSection,
  PropertiesContainer,
} from "./styles";
import Title from "../Title/Title";
// import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { Done } from "@mui/icons-material";
import plan1 from "../../assets/hosting-basic.png";
import plan2 from "../../assets/hosting-advanced.png";
import plan3 from "../../assets/hosting-professional.png";

const Plan = ({ plan }) => {
  return (
    <PlanContainer isMostPopular={plan.isMostPopular}>
      <h1 className="title">{plan.type}</h1>
      <figure>
        <img src={plan.icon} alt={plan.type} />
      </figure>
      <h1 className="cost">{`$${plan.cost}`}</h1>
      <PropertiesContainer>
        <p>
          <Done /> {`${plan.space}GB HDD Space`}
        </p>
        <p>
          <Done /> {`${plan.addresses} Email Addresses`}
        </p>
        <p>
          <Done /> {`${plan.subdomains} Subdomains`}
        </p>
        <p>
          <Done /> {`${plan.databases} Databases`}
        </p>
        <p>
          <Done /> {`${plan.support} Support`}
        </p>
      </PropertiesContainer>
      <ChooseButton>Choose Plan</ChooseButton>
      {plan.isMostPopular && (
        <MostPopular>
          <span>Most Popular</span>
        </MostPopular>
      )}
    </PlanContainer>
  );
};

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <Title text="pricing plans" />
      <PricingContainer>
        {/* <Plan plan={plan} /> */}
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan} />
        ))}
      </PricingContainer>
    </PricingSection>
  );
};

const plans = [
  {
    type: "basic",
    icon: plan1,
    cost: 15,
    space: 10,
    addresses: 5,
    subdomains: 2,
    databases: 4,
    support: "basic",
    isMostPopular: false,
  },
  {
    type: "Advanced",
    icon: plan2,
    cost: 25,
    space: 20,
    addresses: 10,
    subdomains: 5,
    databases: 8,
    support: "Advanced",
    isMostPopular: true,
  },
  {
    type: "Professional",
    icon: plan3,
    cost: 45,
    space: 50,
    addresses: 20,
    subdomains: 10,
    databases: 20,
    support: "Professional",
    isMostPopular: false,
  },
];

export default Pricing;
