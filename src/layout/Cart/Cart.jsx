/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';

const Cart = () => {
  const axiosPublic = useAxiosPublic();

  const { data: invoices = [], refetch } = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      const res = await axiosPublic.get('/carts');
      return res.data;
    },
  });

  console.log(invoices);

  // const { data: carts = [] } = useQuery({
  //   queryKey: ['carts'],
  //   queryFn: async () => {
  //     const res = await axiosPublic.delete(`/carts/${_id}`);
  //     return res.data;
  //   },
  // });

  const handleDelete = (e) => {
    axiosPublic.delete(`/carts/${e}`).then((res) => {
      refetch();
      console.log(res.data);
    });
  };

  // const handleDelete = (e) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosPublic.delete(`/carts/${e._id}`).then((res) => {
  //         console.log(res.data);
  //         if (res.data.deletedCount) {
  //           refetch();
  //           Swal.fire({
  //             title: 'Deleted!',
  //             text: 'Your file has been deleted.',
  //             icon: 'success',
  //           });
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <div className="lg:px-24">
      <Table>
        <TableHeader>
          <TableRow className="w-full">
            <TableHead>
              <h1 className="uppercase">Image</h1>
            </TableHead>
            <TableHead className="uppercase">Name</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>BUY</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">
                <img className="w-14 h-12" src={invoice.productImage} alt="" />
              </TableCell>
              <TableCell>{invoice.productName}</TableCell>
              <TableCell>{invoice.productCreationDateTime}</TableCell>
              <TableCell>{invoice.category}</TableCell>
              <TableCell>${invoice.price}</TableCell>
              <TableCell>
                <button>
                  <Button>BUY</Button>
                </button>
              </TableCell>
              <TableCell>
                <button onClick={() => handleDelete(invoice._id)}>
                  <Button>X</Button>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default Cart;
