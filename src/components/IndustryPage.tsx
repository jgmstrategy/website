import { expertiseType } from '@/constants/categories';
import { insightType } from '@/constants/insights';
import CategoryPage from './CategoryPage';

type IndustryPageProps = {
  name: string;
  backgroundImage: string;
  subtitle: string;
  testimonials: Array<insightType>;
  featuredInsights: Array<insightType>;
  experience: JSX.Element;
  description?: JSX.Element;
  featuredPartners?: Array<string>;
  featuredServices?: Array<expertiseType>;
};

export default function IndustryPage(props: IndustryPageProps) {
  return (
    <CategoryPage
      name={props.name}
      backgroundImage={props.backgroundImage}
      subtitle={props.subtitle}
      testimonials={props.testimonials}
      featuredInsights={props.featuredInsights}
      experience={props.experience}
      description={props.description}
      featuredPartners={props.featuredPartners}
      featuredServices={props.featuredServices}
      pageType='industry'
    />
  );
}