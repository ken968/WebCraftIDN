import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Strategy", href: "#strategy" },
	{ name: "Analysis", href: "#swot" },
	{ name: "Projects", href: "#projects" },
	{ name: "Testimonials", href: "#portfolio" },
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
			// set Home active when near top of the page (so #home highlights)
			if (window.scrollY < 100) {
				setActiveSection("#home");
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Highlight active section on desktop using IntersectionObserver
	useEffect(() => {
		// exclude #home from intersection tracking (no active-section tracking for Home)
		const ids = navLinks.map((l) => l.href).filter((id) => id !== "#home");
		const sections = ids
			.map((id) => document.querySelector(id))
			.filter(Boolean) as Element[];
		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(`#${entry.target.id}`);
					}
				});
			},
			{ threshold: 0.6 }
		);

		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	const scrollToSection = (href: string) => {
		// Try scroll to element; if not found (e.g. #home not present), scroll to top
		const element = href === "#" ? null : document.querySelector(href);
		if (element) {
			(element as Element).scrollIntoView({ behavior: "smooth" });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		setMobileOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						className="flex items-center gap-2 group cursor-pointer"
					>
						<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary transition-smooth">
							<Code2
								className={`w-6 h-6 ${
									isScrolled
										? "text-primary"
										: "text-primary-foreground"
								} group-hover:text-primary-foreground`}
							/>
						</div>
						<span
							className={`text-xl md:text-2xl font-bold transition-smooth ${
								isScrolled
									? "text-foreground"
									: "text-primary-foreground"
							}`}
						>
							WebCraft
						</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(link.href);
								}}
								className={`text-sm font-medium transition-smooth relative group ${
									activeSection === link.href
										? link.href === "#home"
											? "text-white"
											: "text-primary"
										: isScrolled
										? "text-foreground hover:text-primary"
										: "text-primary-foreground hover:text-primary-foreground/80"
								}`}
							>
								{link.name}
								{/* only show underline for non-home links on desktop */}
								<span
									className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
										link.href === "#home"
											? "w-0" // never underline Home
											: activeSection === link.href
											? "w-full"
											: "w-0 group-hover:w-full"
									}`}
								/>
							</a>
						))}
					</div>

					{/* Desktop CTA */}
					<div className="hidden lg:block">
						<Button
							onClick={() => scrollToSection("#get-started")}
							variant={isScrolled ? "default" : "hero"}
							size="lg"
							className={
								!isScrolled
									? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
									: ""
							}
						>
							Get Started
						</Button>
					</div>

					{/* Mobile Menu */}
					<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
						<SheetTrigger asChild className="md:hidden">
							{/* show sheet for mobile + tablet (below lg) */}
							<Button
								variant="ghost"
								size="icon"
								className={
									isScrolled
										? "text-foreground"
										: "text-primary-foreground"
								}
							>
								{mobileOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[300px] bg-card/95 backdrop-blur-lg"
						>
							<div className="flex flex-col gap-6 mt-8">
								<div className="flex items-center gap-2 pb-6 border-b border-border">
									<Code2 className="w-6 h-6 text-primary" />
									<span className="text-xl font-bold text-foreground">
										WebCraft
									</span>
								</div>
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										onClick={(e) => {
											e.preventDefault();
											scrollToSection(link.href);
										}}
										className={`text-lg font-medium transition-smooth py-2 ${
											activeSection === link.href
												? link.href === "#home"
													? "text-white"
													: "text-primary"
												: "text-foreground hover:text-primary"
										}`}
									>
										{link.name}
									</a>
								))}
								<Button
									variant="default"
									size="lg"
									className="mt-4"
									onClick={() => scrollToSection("#get-started")}
								>
									Get Started
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
