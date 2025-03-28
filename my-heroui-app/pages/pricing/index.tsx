import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";





export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Pricing</h1>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>


      </section>
    </DefaultLayout>
  );
}
