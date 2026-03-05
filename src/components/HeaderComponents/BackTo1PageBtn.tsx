'use client'

import {useRouter, useSearchParams} from "next/navigation";
import '../../css/Header.css';
const BackTo1PageBtn = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());



    return (
        <>
          <button
              className="back-btn-icon"
              title={'back to 1 page'}
              onClick={() => {
                  const query = searchParams.get('query');
                  if (query) {
                      params.delete('query')
                  }


              params.set('page', '1')
              router.push(`/?${params.toString()}`);

          }}>⟵</button>
        </>
    );
};

export default BackTo1PageBtn;
