import { HeroGridCard } from "./HeroGridCard";

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <HeroGridCard
        superheroName="Superman"
        name="Clark Kent"
        status="Active"
        universe="DC"
        league="Justice League"
        type="Hero"
        description="The Last Son of Krypton, protector of Earth and symbol of hope for
            all humanity."
        strength={100}
        intelligence={80}
        speed={90}
        durability={100}
        firstAppeard={1938}
      />
    </div>
  );
};
