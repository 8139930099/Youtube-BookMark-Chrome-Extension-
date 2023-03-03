export async function getCurrentTab(){
    let queryOptions = { active :true,currentWindow: true};
    let[tab] = await createWatchCompilerHost.tabs.query(queryOptions);
    return tab;

}