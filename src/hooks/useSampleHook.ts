interface UseSampleHookResponse {
  sampleField: string
  sampleFunction: () => void
}

const useSampleHook = (sampleField: string): UseSampleHookResponse => {
  const sampleFunction = async () => {
    // do functions here
  }

  return {
    sampleField,
    sampleFunction,
  }
}

export default useSampleHook
