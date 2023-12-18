import { LucideSearch } from "lucide-react";

export function EmailSearch() {
    return (
        <form className="email-search" onSubmit={(e) => e.preventDefault()}>
            <label>
                <LucideSearch size="1.2rem" className="search-icon"/>
                <input placeholder="Search mail" className="simple-input"/>
            </label>
        </form>
    )
}