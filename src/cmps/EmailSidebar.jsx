import cx from "@/utils/cx.js";
import { EmailComposeBtn } from "@/cmps/EmailComposeBtn.jsx";
import { EmailFolderBtn } from "@/cmps/EmailFolderBtn.jsx";


export function EmailSidebar({ collapsed, emailCount, folders }) {

    return (
        <aside className={cx("email-sidebar", { collapsed })}>
            <EmailComposeBtn/>
            <div className="email-folders">
                {folders.map(folder => <EmailFolderBtn key={folder} folder={folder} count={emailCount[folder]}/>)}
            </div>
        </aside>
    )
}