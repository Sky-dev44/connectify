import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-box bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab ${activeTab === "chats" ? "bg-[#bd93f9]/20 text-[#bd93f9]" : "text-[#6272a4]"}`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab ${activeTab === "contacts" ? "bg-[#bd93f9]/20 text-[#bd93f9]" : "text-[#6272a4]"}`}
      >
        Contacts
      </button>
    </div>
  );
}

export default ActiveTabSwitch;
