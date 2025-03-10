import { prisma } from "@/prisma/db";
import { Subscription } from "@prisma/client";

interface Props {
    subscriptions: Subscription[];
}

const SubscriptionsTable = async ({ subscriptions }: Props) => {
    if (!subscriptions || subscriptions.length === 0) {
        // Handle empty subscriptions
        return (
            <div className="text-red-500 font-bold">No subscriptions found</div>
        );
    }

    const userId = subscriptions[0]?.userId; // Ensure a single unique userId
    if (!userId) {
        return (
            <div className="text-red-500 font-bold">User ID is missing in subscription</div>
        );
    }

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                        User
                    </th>
                    <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                        Payment Id
                    </th>

                    <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                {subscriptions.map((subscription) => (
                    <tr key={subscription.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {user?.name}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {subscription.paymentId}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {subscription.amount}$
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SubscriptionsTable;
