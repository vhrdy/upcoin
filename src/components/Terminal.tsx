import {
    Terminal,
    TypingAnimation,
    AnimatedSpan,
  } from '@/components/ui/shadcn-io/terminal';
  const Example = () => (
    <Terminal className="w-full max-w-full">
      <AnimatedSpan delay={0}>$ npm install upcoin</AnimatedSpan>
      <TypingAnimation delay={1000} duration={100}>
        Installing dependencies...
      </TypingAnimation>
      <AnimatedSpan delay={3000}>✓ Package installed successfully</AnimatedSpan>
      <AnimatedSpan delay={3500}>$ npm run dev</AnimatedSpan>
      <TypingAnimation delay={4500} duration={80}>
        Starting going up only...
      </TypingAnimation>
      <AnimatedSpan delay={6500}>🚀 Server ready at https://upcoin.lol</AnimatedSpan>
    </Terminal>
  );
  export default Example;