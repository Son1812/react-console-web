import PageMeta from "../../components/common/PageMeta";
import Intent from '@/modules/Config/intent'
export default function IntentListPage(){
  return (
    <>
      <PageMeta
        title="Danh sách ý định"
        description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <Intent />
    </>
  );
}