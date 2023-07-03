import Heading from "@/components/Heading";

export default function HomePage() {
	console.log('[HomePage] rendering');
	return (
		<>
			<Heading className="font-bold text-2xl pb-3">Indie Gamer</Heading>
			<p>Only the best indie games, reviewed for you.</p>
		</>
		
	)
}