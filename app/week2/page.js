import Link from "next/link";
import EventList from './event-list';

export default function Page() {
    return <main>
        Hello week 2
        <p>
            <Link href="/">Home</Link>
        </p>
        <EventList />

    </main>;
}