import { Link } from "react-router"

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            <h1>Mailbox List</h1>
            <ul>
                {mailboxes.map((mailbox) => (
                    <li className="list" key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MailboxList