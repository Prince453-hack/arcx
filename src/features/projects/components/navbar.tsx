import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Id } from "../../../../convex/_generated/dataModel";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = ({ projectId }: { projectId: Id<"project"> }) => {
  return (
    <nav className="flex justify-between items-center gap-x-2 p-2 bg-sidebar border-b">
      <div className="flex items-center gap-x-2">
        <Breadcrumb>
          <BreadcrumbList className="gap-0!">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="flex items-center gap-1.5 group/logo"
                asChild
              >
                <Button variant="ghost" className="w-fit! p-1.5! h-7!" asChild>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="Arcx"
                      width={20}
                      height={20}
                      draggable={false}
                    />
                    <span className={cn("text-sm font-medium", font.className)}>
                      Arcx
                    </span>
                  </Link>
                </Button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="ml-0! mr-1" />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm cursor-pointer hover:text-primary font-medium max-w-40 truncate">
                Demo Project
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
