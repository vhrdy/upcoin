import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/shadcn-io/marquee';

const Example = () => (
  <Marquee>
    <MarqueeContent>
      {new Array(6).fill(null).map((_, index) => (
        <MarqueeItem className="h-auto" key={index}>
          <img
            alt={`Placeholder ${index}`}
            className="overflow-hidden rounded-full h-48"
            src={`/assets/logo.png`}
          />
        </MarqueeItem>
      ))}
    </MarqueeContent>
  </Marquee>
);
export default Example;