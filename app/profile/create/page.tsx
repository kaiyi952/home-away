import FormContainer from "@/components/form/FormContainer";



const createProfileAction = async (prevState:any,formData: FormData) => {
    'use server';
    const firstName = formData.get('firstName') as string;
    console.log(firstName);
    return {message:'Profile Created' }
}

function CreateProfilePage() {
    return <section>
        <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
        <div className='border p-8 rounded-md max-w-lg'>
            <FormContainer action={createProfileAction}>

            </FormContainer>
        </div>
  </section>
}

export default CreateProfilePage