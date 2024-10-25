import PageWrapper from "@/components/extras/page_wrapper";
import { AnimatedButton, Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import AnimateText from "@/components/utility/animate-text";
import { cn } from "@/lib/utils";
import FeatureDomain from "./feature-domain";
import Footer from "@/components/extras/footer";
import FeatureCollaboration from "./feature-collaboration";

export default function Home() {
  return (
    <PageWrapper>
      <main
        className={cn(
          "w-full h-dvh",
          // "bg-[url(https://res.cloudinary.com/djoo8ogmp/image/upload/v1704147031/uploaded/BGMI-Wallpaper-Thumb-20_mp7art.webp)]",
          "bg-cover bg-center bg-no-repeat"
        )}
      >
        <Spotlight
          className="-top-20 left-0 md:left-60 md:-top-20"
          fill="hsl(var(--muted-foreground))"
        />
        <Spotlight
          className="-top-20 left-24 md:left-[40rem] md:-top-20 md:hidden"
          fill="hsl(var(--muted-foreground)/60%)"
        />

        {/* Hero */}
        <section
          id="hero"
          className="pt-20 sm:pt-44 relative max-w-[1900px] mx-auto sm:-mb-28"
        >
          <div className={cn("h-full sm:w-2/3", "left-0 top-0")}>
            <div
              className={cn(
                "w-full mx-auto max-w-4xl sm:min-h-[700px] px-5 md:px-10"
              )}
            >
              <h1
                className={cn(
                  "text-[clamp(2.5rem,5vw,3.75rem)] hidden lg:block",
                  "font-semibold text-left leading-tight",
                  "box-decoration-clone"
                )}
              >
                <AnimateText text="Exclusive, collaborative, and fun" />
                <AnimateText
                  text="Bitworks, built for us."
                  initialDelay={200}
                />
              </h1>

              <h1
                className={cn(
                  "text-[clamp(2.5rem,12vw,3.75rem)] lg:hidden",
                  "font-semibold text-center md:text-left leading-tight"
                )}
              >
                <AnimateText text="Our Space," />
                <br />
                <AnimateText text="Our Creations." initialDelay={200} />
              </h1>

              <p
                className={cn(
                  "hidden lg:block mt-5 max-w-xl mx-auto md:mx-0",
                  "text-center md:text-left text-2xl font-medium text-muted-foreground",
                  "opacity-0 animate-reveal-up delay-200"
                )}
              >
                A private hub for us to create, collaborate, and innovate
                together.
              </p>

              <p
                className={cn(
                  "lg:hidden mt-5 max-w-xl mx-auto md:mx-0",
                  "text-center md:text-left text-xl font-medium text-muted-foreground",
                  "opacity-0 animate-reveal-up delay-200"
                )}
              >
                Exclusive, collaborative, and fun, Bitworks is a private hub
                built for us to create, collaborate, and innovate together.
              </p>

              <div className="mt-10 flex flex-row items-center justify-center md:justify-start gap-4">
                <Button
                  variant="default"
                  className="text-lg opacity-0 animate-reveal-up delay-300"
                >
                  Get Started
                </Button>
                <AnimatedButton
                  variant="ghost"
                  className="text-lg opacity-0 animate-reveal-up delay-400"
                >
                  Join Us Now
                </AnimatedButton>
              </div>
            </div>
          </div>

          {/* Desktop Hero */}
          <div
            className={cn(
              "w-full h-[700px] hidden sm:block",
              "absolute inset-0 -z-10"
            )}
          >
            <div
              className={cn(
                "absolute h-full w-2/3",
                "right-0 top-0",
                "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(to_bottom,transparent_50%,_hsl(var(--background))_100%)]",
                "after:-mb-1"
              )}
            >
              <div
                className={cn(
                  "[perspective:4000px] [perspective-origin:100%_0] [transform-style:preserve-3d]",
                  "relative w-[1600px] h-full contain-strict overflow-hidden"
                )}
              >
                <div
                  className={cn(
                    "[transform:translateX(25%)_scale(.9)_rotateX(-5deg)_rotateY(-31deg)_rotate(0deg)_skewX(-25deg)] [transform-origin:top_left]",
                    "absolute inset-0 h-[700px] w-[1600px] m-auto mt-[50px] [backface-visibility:hidden]",
                    "border border-primary-foreground rounded-xl shadow-2xl"
                    // "contain-strict overflow-hidden"
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full h-full",
                      "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(to_right,transparent_80%,hsl(var(--background))_90%)]",
                      "after:-mr-1",
                      "bg-[url(https://res.cloudinary.com/djoo8ogmp/image/upload/v1729790167/uploaded/www.notion.so_codewitharif_a34d9e8e9884427089f86fe3251fab6c_v_a8835d105c24458b9019647451c6510a_SS_t0qrki.webp)]",
                      "bg-cover bg-top bg-no-repeat",
                      "animate-reveal-up opacity-0 [animation-delay:500ms]",
                      "rounded-xl"
                    )}
                  >
                    {/* <h1 className="text-6xl font-semibold text-white text-center">
                      Bitworks
                    </h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Hero */}
          <div
            className={cn(
              "relative w-full -z-10 sm:hidden",
              "left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]",
              "sm:before:-mt-[140px] before:block",
              "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(to_bottom,transparent_50%,_hsl(var(--background))_100%)]",
              "after:-mb-1"
            )}
          >
            <div className={cn("w-full h-[600px] sm:h-[900px]")}>
              <div
                className={cn(
                  "[perspective:4000px] [perspective-origin:100%_0] [transform-style:preserve-3d]",
                  "relative w-full h-full contain-strict overflow-hidden"
                )}
              >
                <div
                  className={cn(
                    "[transform:scale(.7)_rotateX(47deg)_rotateY(21deg)_rotate(-30deg)]",
                    "sm:[transform:translateX(2%)_scale(1.2)_rotateX(47deg)_rotateY(31deg)_rotate(324deg)] [transform-origin:top_left]",
                    "absolute inset-0 h-[900px] w-[1600px] m-auto ml-[1%] sm:ml-auto mt-[100px] sm:mt-[280px] [backface-visibility:hidden]",
                    "border border-primary-foreground rounded-3xl shadow-2xl"
                    // "contain-strict overflow-hidden"
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full h-full",
                      "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(to_right,transparent_80%,hsl(var(--background))_90%)]",
                      "after:-mr-1",
                      "bg-[url(https://res.cloudinary.com/djoo8ogmp/image/upload/v1729790167/uploaded/www.notion.so_codewitharif_a34d9e8e9884427089f86fe3251fab6c_v_a8835d105c24458b9019647451c6510a_SS_t0qrki.webp)]",
                      "bg-cover bg-top bg-no-repeat",
                      "animate-reveal-up opacity-0 [animation-delay:500ms]",
                      "rounded-3xl"
                    )}
                  >
                    {/* <h1 className="text-6xl font-semibold text-white text-center">
                      Bitworks
                    </h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="pt-5 md:pt-5">
          <div className={cn("w-full max-w-5xl mx-auto px-5 md:px-10 py-5")}>
            <h2 className="text-4xl font-semibold text-center">
              {/* <AnimateText text="Empowering Our Team" animateOnView /> */}
              Empowering Our Team
            </h2>
            <p className="text-lg font-medium text-center text-muted-foreground pt-4">
              {/* <AnimateText
                text="Discover the tools and features designed to fuel collaboration and drive creativity."
                animateOnView
                delay={50}
              /> */}
              Discover the tools and features designed to fuel collaboration and
              drive creativity.
            </p>
          </div>

          <div className={cn("w-full max-w-6xl mx-auto mt-5")}>
            <div
              className={cn(
                "w-full h-0.5 bg-muted-foreground/50",
                "bg-gradient-to-r from-background via-primary-foreground/20 to-background"
              )}
            />

            <div
              className={cn(
                "flex flex-col md:flex-row items-stretch justify-start"
              )}
            >
              <FeatureCollaboration />

              <div
                className={cn(
                  "w-full md:w-0.5 h-0.5 md:h-auto bg-muted-foreground/50 md:bg-muted-foreground/30",
                  "max-md:bg-gradient-to-r from-background via-primary-foreground/20 to-background"
                )}
              />

              <div className={cn("w-full md:w-2/3", "p-5 md:p-10")}>
                <h3 className="text-2xl font-semibold">Private and Secure</h3>
                <p className="text-lg font-medium text-muted-foreground pt-2">
                  Build with confidence knowing everything stays within the
                  team.
                </p>
              </div>
            </div>

            <div
              className={cn(
                "w-full h-0.5 bg-muted-foreground/50",
                "bg-gradient-to-r from-background via-primary-foreground/20 to-background"
              )}
            />

            <div
              className={cn(
                "flex flex-col md:flex-row items-stretch justify-start"
              )}
            >
              <FeatureDomain />

              <div className={cn("w-0.5 bg-muted-foreground/30")} />

              <div className={cn("w-full md:w-1/3", "p-5 md:p-10")}>
                <h3 className="text-2xl font-semibold">
                  Fun and Productive Environment
                </h3>
                <p className="text-lg font-medium text-muted-foreground pt-2">
                  Bitworks blends serious innovation with fun, making
                  collaboration a joy.
                </p>
              </div>
            </div>

            <div
              className={cn(
                "w-full h-0.5 bg-muted-foreground/50",
                "bg-gradient-to-r from-background via-primary-foreground/20 to-background"
              )}
            />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </PageWrapper>
  );
}
