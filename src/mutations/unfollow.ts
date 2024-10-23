export const unfollowCharacter = async ({ id }) => {
  const response = await fetch(`/api/follow?characterId=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if(!response.ok) {
    throw new Error(data.message);
  }
};
